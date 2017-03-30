# 唐诗API

用于查询唐诗，使用的是[mysql-to-rest](https://www.npmjs.com/package/mysql-to-rest)这个library

mysql-to-rest的api还是比较受限，而且没有metadata，后期我会对这个library做增强

## USAGE

* GET 10 poets, limit 10, skip 10

```text
GET https://api.fornever.org/tang-poetry/poets?_limit=10,10
```

* GET ALL poetries which content have 李白

```text
GET https://api.fornever.org/tang-poetry/poetry_view?content[like]=%李白%
```

* GET ALL poetries written by 元稹

```text
GET https://api.fornever.org/tang-poetry/poetry_view?poet_name=元稹
```