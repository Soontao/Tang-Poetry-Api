# 唐诗API

用于查询唐诗，使用了一个叫做[mysql-to-rest](https://www.npmjs.com/package/mysql-to-rest)的library

数据来自于[全唐诗数据库](https://github.com/hxgdzyuyi/tang_poetry)

~~mysql-to-rest的api还是比较受限，而且没有metadata，后期我会对这个library做增强~~

我封装了一个[mysql to api](https://github.com/Soontao/mysql-api)的库，可以轻松把mysql数据库暴露成rest api，这个库使用了mysql to rest以及我自己写的[mysql metadata](https://github.com/Soontao/mysql-metadata)

所以这个API现在只是run了一个mysql2api的实例

## USAGE

* GET 10 poets, limit 10, skip 10, 获取第10到20条诗人数据

```text
GET https://api.fornever.org/tang-poetry/poets?_limit=10,10
```

* GET ALL poetries which content have 李白, **YOU HAVE TO INCLUDE %25 CHARACTERS** ，获取内容中含有“李白”的诗，必须包含%25这个字符

```text
GET https://api.fornever.org/tang-poetry/poetry_view?content[like]=%25李白%25
```

* GET ALL poetries written by 元稹, and only select [id] and [title] columns，获取元稹所作的诗词，只抽取id和title两列

```text
GET https://api.fornever.org/tang-poetry/poetry_view?poet_name=元稹&_fields=poetry_id,title
```

* GET a random poetry，获取一条随机的诗词

```text
GET https://api.fornever.org/tang-poetry/random
```

* Get the 10 poets with the least number of works，获取作品最少的十个诗人

```text
GET https://api.fornever.org/tang-poetry/poet_poetries_count?_limit=10&_order[poetries_count]=asc
```
