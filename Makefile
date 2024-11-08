# Установка зависимостей
install:
	npm ci 

lint:
	npx eslint .

test:
	npx jest --coverage

.PHONY: install lint test