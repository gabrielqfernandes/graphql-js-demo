<h1 align=center>GraphQL Api Demo</h1>

## `Description`

Simple CRUD app for a Gym Management System context that which addresses the implementation of Mongoose and Apollo-Server in Node.js.
<br>

## `Requirements`
- Docker & Docker-Compose

## `Installation`

```sh
npm install
# or if you're usign yarn
yarn
```

## `Running`

```sh
docker-compose up -d && docker-compose logs -f api
```

## `Available Resources`

<details>
  <summary><h3>Classes</h3></summary>


```graphql
query GetClasses {
  findClasses {
    name
    teacher
    occurDate
  }
}

mutation CreateClasses($newClass: ClassInput!) {
  createClass(classSession: $newClass) {
    id
    name
    teacher
    occurDate
  }
}

mutation UpdateClass($classId: ID!, $payload: ClassInput!) {
  updateClass(id: $classId, body: $payload) {
    id
    name
    teacher
    occurDate
  }
}

mutation DeleteClass {
  deleteClass(id: "") {
    status
    message
  }
}
```
</details>

<details>
  <summary><h3>Students</h3></summary>

```graphql
query FindStudents {
  findStudents {
    id
    name
    email
    age
    signedTo {
      name
      teacher
    }
    createdAt
    updatedAt
  }
}

mutation CreteStudent($newStudent: StudentInput!) {
  createStudent(student: $newStudent) {
    id
    name
    email
    age
    signedTo {
      name
      teacher
    }
    createdAt
    updatedAt
  }
}

mutation UpdateStudent($studentId: ID, $updatePayload: StudentInput) {
  updateStudent(id: $studentId, body: $updatePayload) {
    id
    name
    email
    age
    signedTo {
      name
      teacher
    }
    createdAt
    updatedAt
  }
}

mutation DeleteStudent {
  deleteStudent(id: "") {
    status
    message
  }
}
```
</details>
