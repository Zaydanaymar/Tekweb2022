```python
### User

#### Menampilkan data user


GET: /user

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
    },
    ...
]


#### Menampilkan data user dengan `id` tertentu


GET: /user/[id]

reponse:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}


#### Menambahkan data pengguna


POST: /user

data:
{
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


#### Edit data pengguna


PUT: /user

data:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure



#### Menghapus data anggota


DELETE: /user/[id]

response:
true    // if success
false   // if failure


### Artikel

#### Menampilkan data semua artikel


GET: /article

response:
[
    {
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
    }
    ....
]


#### Menampilkan data artikel dengan id  tertentu


GET: /articles/[id]

response:
{
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}


#### Menambahkan data artikel


POST: /artikel

data:
{       
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


#### Mengedit data artikel


PUT: /articles

data:
{      
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


#### Menghapus data artikel


DELETE: /articles/[id]

response:
true    // if success
false   // if failure



### Buku Almat

#### Menampilkan data semua Buku


GET: /Buku

response:
[
    {
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
    }
]


#### Menampilkan data buku dengan id  tertentu


GET: /buku/[id]

response:
{
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}


#### Menambahkan data buku


POST: /buku

data:
{       
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


#### Mengedit data buku


PUT: /buku

data:
{      
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


#### Menghapus data buku


DELETE: /buku/[id]

response:
true    // if success
false   // if failure




## Desain Database

Desain database untuk menyediakan API Points adalah sebagai berikut:

![Desain database API](https://github.com/Zaydanaymar/tekweb2022/blob/main/api.drawio.png)

```
ci4
classDiagram
    class Users{
        # id: int
        + nama: string
        + des: string
        + ig: string
        + github: string
        + yt: string
        + wa: string
        + sampul: string
        + getAllUser()
        + getUserById()
        + updateUser()
        + createUser()
        + deleteUser()
    }
    class Buku{
        # id: int;
        + nama: string
        + alamat: string
        + getAllBuku()
        + getBukuById()
        + getBukuByAuthor()
        + updateBuku()
        + createBuku()
        + deleteBuku()
    }
    class Artikel{
        # id: int,
        + judul: string
        + slug: string
        + title: string
        + deskripsi: string
        + sampul: string
        + getAllArticle()
        + getArticleById()
        + getArticlesByAuthor()
        + updateArticle()
        + createArticle()
        + deleteArticle()
    }
