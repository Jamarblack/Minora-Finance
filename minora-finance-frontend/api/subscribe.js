export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // Fail loudly and clearly instead of crashing on .split() of undefined
  if (!API_KEY || !AUDIENCE_ID) {
    console.error('Missing Mailchimp env vars:', {
      hasApiKey: Boolean(API_KEY),
      hasAudienceId: Boolean(AUDIENCE_ID),
    });
    return res.status(500).json({
      error: 'Server misconfigured: Mailchimp credentials not found in environment variables.',
    });
  }

  if (!API_KEY.includes('-')) {
    console.error('MAILCHIMP_API_KEY is malformed (no datacenter suffix found):', API_KEY.slice(0, 6) + '...');
    return res.status(500).json({
      error: 'Server misconfigured: Mailchimp API key is malformed (missing datacenter suffix like "-us21").',
    });
  }

  const DATACENTER = API_KEY.split('-')[1];

  const payload = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name,
    },
  };

  try {
    const mailchimpResponse = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const mailchimpData = await mailchimpResponse.json();

    if (!mailchimpResponse.ok) {
     
      console.error('Mailchimp API error:', mailchimpData);

  
      if (mailchimpData.title === 'Member Exists') {
        return res.status(200).json({ message: 'Already subscribed — welcome back!' });
      }

      return res.status(mailchimpResponse.status).json({
        error: mailchimpData.detail || mailchimpData.title || 'Mailchimp rejected the request.',
      });
    }

    return res.status(201).json({ message: 'Success!' });
  } catch (error) {
    console.error('Fetch to Mailchimp failed:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal Server Error contacting Mailchimp.',
    });
  }
}