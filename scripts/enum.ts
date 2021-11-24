enum Permission {
   ADMIN = 1,
   USERSPERMISSION = "USER",
   READONLY = "READONLY"
}

console.log(Permission.ADMIN)
console.log(Permission.USERSPERMISSION)
console.log(Permission.READONLY)
console.log(Permission["USERSPERMISSION"])