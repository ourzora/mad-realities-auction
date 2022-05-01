import postgres from 'postgres'

let sql
if (process.env.METADATA_PSQL_DB_URL) {
  sql = postgres(process.env.METADATA_PSQL_DB_URL)
}

export default sql
