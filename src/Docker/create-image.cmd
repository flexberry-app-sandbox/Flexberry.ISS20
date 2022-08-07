docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss20/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss20/app ../..
