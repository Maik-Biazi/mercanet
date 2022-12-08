/* eslint-disable @typescript-eslint/no-var-requires */
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function mail(req, res) {
  const message = `
    Name: ${req.body.name}\r\n <br>
    Email: ${req.body.email}\r\n <br>
    Mensagem: ${req.body.mensagem}\r\n <br>
  `;

  const mailData = {
    from: 'enviosmacaw@gmail.com',
    to: process.env.NEXT_PUBLIC_EMAIL,
    replyTo: req.body.email,
    subject: `Mensagem de ${req.body.name}`,
    text: message,
    html: message,
  };

  try {
    await sendgrid.send(mailData);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ status: 'OK' });
}
