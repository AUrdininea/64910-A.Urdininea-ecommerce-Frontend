import defaultPicture from "../../assets/images/avatar/usuario.jpg";

export default function UserTableRow({ usr, deleteUser, setFormValueFn }) {
	console.log(usr);
	return (
		<>
			<tr>
				<td>
					<img
						className="defaultPicture"
						src={usr.image ? `${URL}/images/users/${usr.image}`: defaultPicture}
					/>
				</td>
				<td> {usr.name} </td>
				<td> {usr.email} </td>
				<td> {usr.location ? usr.location : <span>No Data</span>}</td>
				<td> {usr.age} </td>
				<td> {usr.role} </td>
				<td>
					<button
						className="action-btn btn-danger"
						onClick={() => deleteUser(usr._id)}
						title="Borrar usuario"
					>
						<i className="fa-solid fa-trash-can"></i>
					</button>
			
					<button
						className="action-btn btn-edit"
						onClick={() => setFormValueFn(usr)}
						title="Editar usuario"
					>
						<i className="fa-solid fa-pen-to-square"></i>
					</button>
				</td>
			</tr>
		</>
	);
}
