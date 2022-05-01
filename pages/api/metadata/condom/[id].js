import sql from '../../../../services/metadata-db'

const DEFAULT_METADATA = {
  title: `Condom For Your Wallet`,
  description: `To celebrate the season finale of Proof of Love S0 of the Mad Realities network, we invite you to mint a condom NFT for your wallet. 
Participate in the finale to unlock a shiny condom by attending the aftershow filming IRL or by voting for the winning couple online. Shiny condoms provide secret perks and access to be revealed over time.
Minting is open for 72 hours after doors open (6:30pm ET on May 1, 2022) and cements your status as an early supporter of Mad Realities.
https://madrealities.xyz/`,
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
