export const roleList = [
  {
    _id: "1231df5a0fcbae72153a91c7",
    name: "Administrator",
    description: "Administers the entire system",
    datecreated: "07/18/2023",
    isActive: true,
    permissions: ["create user", "update user", "read user", "delete user"],
  },
  {
    _id: "3242er5t0fcbwe72353a91c8",
    name: "Moderator",
    description: "Moderates user interactions and content",
    datecreated: "06/10/2023",
    isActive: true,
    permissions: ["update user", "read user"],
  },
  {
    _id: "4365tr5g0fcbge82353a91c9",
    name: "Editor",
    description: "Edits and approves written content",
    datecreated: "05/15/2023",
    isActive: true,
    permissions: ["read user", "update user"],
  },
  {
    _id: "9876yu6i0fcbke72353a91d0",
    name: "Writer",
    description: "Writes and submits content for approval",
    datecreated: "04/20/2023",
    isActive: true,
    permissions: ["create user"],
  },
  {
    _id: "3498oi7u0fcbze72353a91d1",
    name: "Approver",
    description: "Approves content submitted by writers",
    datecreated: "03/30/2023",
    isActive: false,
    permissions: ["read user"],
  },
]
