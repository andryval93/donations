
export class Submitter {
    private icon: string;
    private type: string;
    private name: string;
    private description: string;
    private lastEdit: string;

    constructor(icon: string, type: string, name: string, description: string, lastEdit: string) {
        this.icon = icon;
        this.type = type;
        this.name = name;
        this.description = description;
        this.lastEdit = lastEdit;
    }

    /**
     * Getter $icon
     * @return {string}
     */
    public get $icon(): string {
        return this.icon;
    }

    /**
     * Setter $icon
     * @param {string} value
     */
    public set $icon(value: string) {
        this.icon = value;
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
     * Getter $lastEdit
     * @return {string}
     */
    public get $lastEdit(): string {
        return this.lastEdit;
    }

    /**
     * Setter $lastEdit
     * @param {string} value
     */
    public set $lastEdit(value: string) {
        this.lastEdit = value;
    }
}