// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from 'ethers'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

export default async function handler(req, res) {
  const ensdomain = req.query['ens']

  const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.alchemyapi.io/v2/y141okG6TC3PecBM1mL0BfST9f4WQmLx')
  const address = await provider.resolveName(ensdomain)

  res.status(200).send({ens: ensdomain, address: address})
}
