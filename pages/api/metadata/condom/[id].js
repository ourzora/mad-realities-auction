import sql from '../../../../services/metadata-db'

const DEFAULT_METADATA = {
  title: `Condom For Your Wallet`,
  description: `Something big is coming

Condoms for your wallet were distributed for free starting May 1, 2022 to commemorate your participation in the wrap of Season Zero of Proof of Love, an interactive dating show where you decide who (and what) happens.

This condom provides secret perks and access to be revealed over time, and might unwrap into something sexy.`,
  image: 'ipfs://QmQxjDGdfqb88kCc4tfrxTo3DZgrBFrj1omi63oynJkE2n',
  animation_url: 'ipfs://QmP2ZV51w5VSPa1s3iRqo6NpayJTzjnNihpkcjGjgZ5e8H',
  properties: {
    Status: 'Broken',
    Interaction: 'Powers Dormant',
  },
}

export default async function handler(req, res) {
  const { id } = req.query

  const idNumber = parseInt(id, 10)

  const metadataValue = {
    ...DEFAULT_METADATA,
    title: `${DEFAULT_METADATA.title} #${id}`,
  }

  if (!sql) {
    res.send(metadataValue)
    return
  }

  const result = await sql`
    select nft_id from public."Submission" where nft_id = ${idNumber} limit 1;
  `

  if (result) {
    res.send({
      ...metadataValue,
      properties: {
        Status: 'Sexy',
        Interaction: 'Powers Unlocked',
      },
    })
    return
  }

  res.send(metadataValue)
}
