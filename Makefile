.PHONY: clear migrations

clear:
	rm -rf node_modules
	rm -rf .keystone
	rm -rf .next
	npm i


migrations:
	keystone build --no-ui
	keystone prisma migrate dev --name $(NAME)

prisma-deploy:
	keystone prisma migrate deploy
