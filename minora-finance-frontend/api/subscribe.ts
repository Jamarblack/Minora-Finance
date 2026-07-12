export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Fetch credentials from your Vercel Environment Variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  
  // Mailchimp requires the server prefix (e.g., 'us21') from the end of your API key
  const DATACENTER = API_KEY.split('-')[1]; 

  const data = {
    email_address: email,
    status: 'subscribed', // This adds them to the list instantly
    merge_fields: {
      FNAME: name, // This passes the first name to your automated email!
    },
  };

  try {
    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status >= 400) {
      const errorData = await response.json();
      return res.status(400).json({ error: errorData.title || 'Error subscribing' });
    }

    return res.status(201).json({ message: 'Success!' });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}