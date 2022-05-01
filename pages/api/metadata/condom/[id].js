import sql from '../../../../services/metadata-db';

export default async function handler(req, res) {
  const { id } = req.query

  const idNumber = parseInt(id, 10);

  if (!sql) {
    res.send({has: false});
    return
  }

  const result = await sql`
    select nft_id from public."Submission" where nft_id = ${idNumber} limit 1;
  `

  if (result) {
    res.send({has: true});
    return
  }

  res.send({has: true});
}