export default {
	// Template-Definitionen
	templates: [
		{
			id: "T001",
			name: "Brückenbau Standard",
			beschreibung: "Standard-Equipment für Brückenbau-Einsätze",
			materialien: ["M005", "M006", "M012", "M022", "M029", "M034", "M036", "M037", "M041", "M045", "M046", "M049"]
		},
		{
			id: "T002",
			name: "Turmdrehkran Montage",
			beschreibung: "Equipment für Turmdrehkran-Montage",
			materialien: ["M007", "M008", "M016", "M017", "M026", "M029", "M035", "M037", "M042", "M044", "M046", "M047", "M048", "M049", "M050"]
		},
		{
			id: "T003",
			name: "Schwertransport",
			beschreibung: "Heavy-Duty-Set für Schwertransporte",
			materialien: ["M008", "M017", "M018", "M025", "M026", "M043", "M044", "M035", "M037", "M038"]
		},
		{
			id: "T004",
			name: "Leichter Einsatz",
			beschreibung: "Basis-Equipment für kleinere Einsätze",
			materialien: ["M001", "M002", "M009", "M019", "M027", "M033", "M036"]
		},
		{
			id: "T005",
			name: "Hochbau",
			beschreibung: "Standard-Set für Hochbau-Projekte",
			materialien: ["M003", "M004", "M010", "M013", "M020", "M021", "M028", "M034", "M036", "M037", "M047"]
		},
		{
			id: "T006",
			name: "Industriemontage",
			beschreibung: "Komplettausstattung für Industriemontagen",
			materialien: ["M005", "M006", "M014", "M015", "M022", "M023", "M024", "M030", "M035", "M037", "M042", "M045", "M048"]
		},
		{
			id: "T007",
			name: "Notfall-Einsatz",
			beschreibung: "Schnelles Einsatz-Set für Notfälle",
			materialien: ["M002", "M010", "M019", "M020", "M033", "M038", "M039", "M050"]
		},
		{
			id: "T008",
			name: "Wartungsarbeiten",
			beschreibung: "Equipment für Wartungs- und Servicearbeiten",
			materialien: ["M001", "M009", "M011", "M019", "M027", "M047", "M048", "M049"]
		}
	],
	
	// Template-Materialien auflösen (IDs → vollständige Material-Objekte)
	getMaterialienFuerTemplate(templateId) {
		const template = this.templates.find(t => t.id === templateId);
		if (!template) return [];
		
		// Hole die Material-Objekte aus MaterialData
		return template.materialien
			.map(matId => MaterialData.materialien.find(m => m.id === matId))
			.filter(m => m !== undefined);
	},
	
	// Alle Templates für Dropdown
	getTemplateOptions() {
		return this.templates.map(t => ({
			label: t.name + " (" + t.materialien.length + " Teile)",
			value: t.id
		}));
	}
}