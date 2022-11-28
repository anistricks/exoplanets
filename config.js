const PgUser = 'postgres';
const PgHost = 'localhost';
const PgDb = 'postgres://raytylyn:urz8BXUL064NPASQrqW77ErU62ebN7Fp@ella.db.elephantsql.com/raytylyn';
const PgPassword = 'ipl';
const PgPort = 5432;

module.exports = {
    ConnectionString: 'postgres://' + PgUser + ':' + PgPassword + '@' + PgHost + ':' + PgPort + '/' + PgDb
};
