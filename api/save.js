export default async function handler(req, res) {
  const url = "https://script.google.com/macros/s/AKfycbzUsOxxiz8ePK1kKOaR2rh3LxzIjdtRvIy1wwIe-NGnjsBp7m2HQxbedWUC8m8ss7pl0A/exec";

  if (req.method === "POST") {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const text = await response.text();
    return res.status(200).json({ status: text });
  }

  if (req.method === "GET") {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  }

  res.status(405).send("Method Not Allowed");
}
