import sql from '../../../../services/metadata-db'

const DEFAULT_METADATA = {
  title: `Condom For Your Wallet`,
  description: `Something big is coming

Condoms for your wallet were distributed for free starting May 1, 2022 to commemorate your participation in the wrap of Season Zero of Proof of Love, an interactive dating show where you decide who (and what) happens.

This condom provides secret perks and access to be revealed over time, and might unwrap into something sexy.`,
  properties: {
    Status: 'Broken',
    Interaction: 'Powers Dormant',
  },
}

export default async function handler(req, res) {
  const { id } = req.query

  const idNumber = parseInt(id, 10)

  if (!sql) {
    res.send(DEFAULT_METADATA)
    return
  }

  const result = await sql`
    select nft_id from public."Submission" where nft_id = ${idNumber} limit 1;
  `

  if (result) {
    res.send({
      ...DEFAULT_METADATA,
      properties: {
        Status: 'Sexy',
        Interaction: 'Powers Unlocked',
      },
    })
    return
  }

  res.send(DEFAULT_METADATA)
}
