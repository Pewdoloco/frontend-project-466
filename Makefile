# Makefile для запуска линтера, тестов и проверки публикации

install:
	npm install

lint:
	npx eslint .

test:
	npx jest --coverage

# Команда для проверки публикации пакета без фактической отправки
publish:
	npm publish --dry-run

.PHONY: install lint test publish
