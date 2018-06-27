export class SubmitterCard {
    private id : string;
    private name: string;
    private color: string;
    private selectedColor: string;
    private colorDescription: string;
    private logo: string;
    private type: string;
    private colorText: string;
    private description: string;
    private buttonVisibility: boolean;


    constructor(id:string, name: string, color: string,selectedColor:string,colorDescription:string, logo: string, type: string, description: string,colorText: string,buttonVisibility: boolean) {
        this.name = name;
        this.color = color;
        this.logo = logo;
        this.type = type;
        this.selectedColor = selectedColor;
        this.colorDescription = colorDescription;
        this.colorText = colorText;
        this.description = description;
        this.id = id;
        this.buttonVisibility = buttonVisibility;
    }

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Getter $color
     * @return {string}
     */
    public get $color(): string {
        return this.color;
    }

    /**
     * Getter $selectedColor
     * @return {string}
     */
	public get $selectedColor(): string {
		return this.selectedColor;
	}

    /**
     * Setter $selectedColor
     * @param {string} value
     */
	public set $selectedColor(value: string) {
		this.selectedColor = value;
    }
    

    /**
     * Getter $colorDescription
     * @return {string}
     */
	public get $colorDescription(): string {
		return this.colorDescription;
	}

    /**
     * Setter $colorDescription
     * @param {string} value
     */
	public set $colorDescription(value: string) {
		this.colorDescription = value;
	}


    /**
     * Setter $color
     * @param {string} value
     */
    public set $color(value: string) {
        this.color = value;
    }

    /**
     * Getter $logo
     * @return {string}
     */
    public get $logo(): string {
        return this.logo;
    }

    /**
     * Setter $logo
     * @param {string} value
     */
    public set $logo(value: string) {
        this.logo = value;
    }

    /**
     * Getter $type
     * @return {string}
     */
    public get $type(): string {
        return this.type;
    }

    /**
     * Setter $type
     * @param {string} value
     */
    public set $type(value: string) {
        this.type = value;
    }

    /**
     * Getter $description
     * @return {string}
     */
    public get $description(): string {
        return this.description;
    }

    /**
     * Setter $description
     * @param {string} value
     */
    public set $description(value: string) {
        this.description = value;
    }

    /**
     * Getter $colorText
     * @return {string}
     */
	public get $colorText(): string {
		return this.colorText;
	}

    /**
     * Setter $colorText
     * @param {string} value
     */
	public set $colorText(value: string) {
		this.colorText = value;
    }
    

    /**
     * Getter $buttonVisibility
     * @return {boolean}
     */
	public get $buttonVisibility(): boolean {
		return this.buttonVisibility;
	}

    /**
     * Setter $buttonVisibility
     * @param {boolean} value
     */
	public set $buttonVisibility(value: boolean) {
		this.buttonVisibility = value;
	}

}