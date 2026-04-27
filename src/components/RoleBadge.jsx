function RoleBadge({ role }) {
  const roleClass = {
    admin: "role-admin",
    editor: "role-editor",
    reader: "role-reader",
  };

  return (
    <span className={`role-badge ${roleClass[role]}`}>
      {role.toUpperCase()}
    </span>
  );
}

export default RoleBadge;