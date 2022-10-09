export default async function handler(req, res) {
  const result = await resolveAfter2Seconds();
  res.status(200).json({  result })
}

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('test async');
    }, 2000);
  });
}