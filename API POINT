### Users

#### Menampilkan data user


GET: /users

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "sampul"        : "",
        "des"           : "",
    },
    ...
]


#### Menampilkan data user dengan `id` tertentu


GET: /users/[id]

reponse:
{
    "id"            : "",
    "nama"          : "",
    "sampul"        : "",
    "des"           : "",
}


#### Menambahkan data pengguna


POST: /users

data:
{
    "id"            : "",
    "nama"          : "",
    "sampul"        : "",
    "des"           : "",
}

response:
true    // if success
false   // if failure


#### Edit data pengguna


PUT: /users

data:
{
    "id"            : "",
    "nama"          : "",
    "sampul"        : "",
    "des"           : "",
}

response:
true    // if success
false   // if failure



#### Menghapus data anggota


DELETE: /users/[id]

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


#### Menambahkan artikel


POST: /artikel

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


#### Memperbarui artikel


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


#### Menghapus artikel


DELETE: /articles/[id]

response:
true    // if success
false   // if failure



### Portofolio

#### Menampilkan data semua portofolio


GET: /portofolio

response:
[
    {
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
    }
]


#### Menampilkan data portofilio dengan id  tertentu


GET: /portofolio/[id]

response:
{
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}


#### Menambahkan portofolio


POST: /portofolio

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


#### Memperbarui portofolio


PUT: /portofolio

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


#### Menghapus portofolio


DELETE: /portofolio/[id]

response:
true    // if success
false   // if failure






## Desain Database

Desain database untuk menyediakan API Points adalah sebagai berikut:

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
