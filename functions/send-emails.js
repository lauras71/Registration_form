// functions/send-email.js
export async function handler(event, context) {
  const { email, firstName, lastName } = JSON.parse(event.body);

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.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,
    },
    body: JSON.stringify({
      sender: { name: "JEAA", email: "master@jeaa.it" },
      to: [{ email }],
      templateId: 1, // <-- cambia con il tuo vero ID
      params: {
        FIRSTNAME: firstName,
      },
    }),
  });

  const result = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
