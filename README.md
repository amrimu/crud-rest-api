## 🛠 Getting Started

```bash
# Clone this repository
git clone https://github.com/amrimuf/basic-crud-rest-api <folder-name>
cd <folder-name>

# Install dependencies for server
npm install
```

## 🚀 Configure Database

- Create **.env** file in the main folder
- Create **DATABASE** variable and assign your **MongoDB Database URI** value into it.

```
# Then, run the Express server
npm start

# Server runs on http://localhost:3000
```

## 🪟 Schema
```
const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  desc: {
    type: String,
  },
})
```

## 📍 Endpoints
### Get All Posts
``` bash
GET api/posts
```
### Get Single Post
``` bash
GET api/posts/{id}
```

### Delete Post
``` bash
DELETE api/posts/{id}
```

### Create Post
``` bash
POST api/posts

# Request sample
# {
#   "title":"Lorem ipsum",
#   "author":"Andre",
#   "desc":"selamat membaca post ini"
# }
```

### Update Post
``` bash
PUT api/posts/{id}

# Request sample
# {
#   "title":"Updated Title",
#   "author":"Andre",
#   "desc":"selamat membaca post ini"
# }