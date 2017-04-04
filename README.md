# 唐诗API

用于查询唐诗，框架使用的是[mysql-to-rest](https://www.npmjs.com/package/mysql-to-rest)这个library

数据来自于[全唐诗数据库](https://github.com/hxgdzyuyi/tang_poetry)

mysql-to-rest的api还是比较受限，而且没有metadata，后期我会对这个library做增强

## USAGE

* GET 10 poets, limit 10, skip 10

```text
GET https://api.fornever.org/tang-poetry/poets?_limit=10,10
```

* GET ALL poetries which content have 李白, **YOU HAVE TO INCLUDE %25 CHARACTERS**

```text
GET https://api.fornever.org/tang-poetry/poetry_view?content[like]=%25李白%25
```

* GET ALL poetries written by 元稹, and only select [id] and [title] columns

```text
GET https://api.fornever.org/tang-poetry/poetry_view?poet_name=元稹&_fields=poetry_id,title
```

* GET a random poetry

```text
GET https://api.fornever.org/tang-poetry/random
```