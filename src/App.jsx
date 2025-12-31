import { useState } from "react";
import "./App.css";

function App() {
	const [allPages, setAllPages] = useState(false);
	const [selectedPages, setSelectedPages] = useState([]);

	const pagesList = ["Page 1", "Page 2", "Page 3", "Page 4"];

	const handleAllPagesChange = (e) => {
		const checked = e.target.checked;
		setAllPages(checked);
		setSelectedPages(checked ? pagesList.map((_, index) => index) : []);
	};

	const handlePageChange = (index) => (e) => {
		const checked = e.target.checked;
		let newSelectedPages;

		if (checked) {
			newSelectedPages = [...selectedPages, index];
		} else {
			newSelectedPages = selectedPages.filter((i) => i !== index);
		}

		setSelectedPages(newSelectedPages);
		setAllPages(newSelectedPages.length === pagesList.length);
	};

	return (
		<div className="body">
			{/* !!NOTE: The height is 332px instead of 326px from figma */}
			{/* !!NOTE: It caused by the additional border 1px of popup-card (2px total top+bottom) */}
			{/* !!NOTE: And 4px more is caused by automatic page list spacing, see line 47-47 note */}
			<div className="popup-card">
				<label className="checkbox-container">
					{/* !!NOTE: Since improvisation is not allowed, I didn't create a state when only some pages are selected. Instead, I set to unchecked */}
					<span className="checkbox-label">All pages</span>
					<input
						type="checkbox"
						className="checkbox-input"
						checked={allPages}
						onChange={handleAllPagesChange}
					/>
				</label>
				<div className="divider" />
				{/* !!NOTE: Since the figma is set to manual sorting, the space between last checkbox and divider is manual (overlapped) */}
				{/* !!NOTE: But here, I set to automatic spacing, so the total height is different than the figma */}
				{/* !!NOTE: Actually, it can be done by adding margin top with minus value, I separate it to custom class, mt- */}
				{pagesList.map((page, index) => (
					<label key={index} className="checkbox-container">
						<span className="checkbox-label">{page}</span>
						<input
							type="checkbox"
							className="checkbox-input"
							checked={selectedPages.includes(index)}
							onChange={handlePageChange(index)}
						/>
					</label>
				))}
				<div className="divider" />
				<div className="btn-container">
					<button className="btn-default">Done</button>
				</div>
			</div>
		</div>
	);
}

export default App;
