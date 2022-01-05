# GraphQL Api Demo

**Requirements:**

- NodeJs & Mongodb (Atlas Cluster) for running locally.
- Docker & Docker Compose for virtualized execution.

### Installation

```sh
npm install

# or if you're usign yarn

yarn
```
# 

**Examples**
### Classes
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
#
### Students  
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
