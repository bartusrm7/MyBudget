import { useEffect, useState } from "react";
import { useGroupsContext } from "./GroupsContext";
import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation";

export default function Groups() {
	const { createGroup, setCreateGroup, nameGroup, setNameGroup } = useGroupsContext();

	const createNewGroup = () => {
		const newGroup = {
			id: uuidv4(),
			name: nameGroup,
		};
		if (nameGroup === "") {
			return;
		}
		const updatedGroup = [...createGroup, newGroup];
		setCreateGroup(updatedGroup);
		localStorage.setItem("group", JSON.stringify(updatedGroup));
		setNameGroup("");
	};
	const deleteGroup = id => {
		const updateGroupAfterRemove = createGroup.filter(group => group.id !== id);
		setCreateGroup(updateGroupAfterRemove);

		localStorage.setItem("group", JSON.stringify(updateGroupAfterRemove));
	};
	useEffect(() => {
		const savedGroup = localStorage.getItem("group");
		if (savedGroup) {
			setCreateGroup(JSON.parse(savedGroup));
		}
	}, []);

	return (
		<div>
			<Navigation />
			<div className='groups'>
				<div className='groups__main-container'>
					<div className='groups__containers'>
						<h3 className='groups__label'>Create your payments group</h3>
						<div className='groups__create-new-group-container group-container'>
							<input
								className='groups__group-input'
								type='text'
								value={nameGroup}
								onChange={e => setNameGroup(e.target.value)}
							/>
							<button className='groups__add-group-btn' onClick={createNewGroup}>
								CREATE GROUP
							</button>
						</div>
						<div className='groups__created-group-container group-container'>
							{createGroup.map(group => (
								<div key={group.id} className='groups__created-group-items' style={{ textTransform: "capitalize" }}>
									{group.name}
									<span
										className='material-symbols-outlined delete-item'
										onClick={e => {
											e.stopPropagation();
											deleteGroup(group.id);
										}}>
										close
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
