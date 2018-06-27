
export class SettingsIxn {
    private applicationName: string;
    private password: string;
    private port: number;
    private username: string;
    private host: string;
    private warmStandByPort: number;
    private warmStandByTimeout: number;
    private warmStandByAttempts: number;
    private disabled: boolean;

    constructor(applicationName: string, password: string, port: number, username: string, host: string, warmStandByPort: number, warmStandByTimeout: number, warmStandByAttempts: number,disabled: boolean) {
        this.applicationName = applicationName;
        this.password = password;
        this.port = port;
        this.username = username;
        this.host = host;
        this.warmStandByPort = warmStandByPort;
        this.warmStandByTimeout = warmStandByTimeout;
        this.warmStandByAttempts = warmStandByAttempts;
        this.disabled = disabled;
    }


    /**
     * Getter $applicationName
     * @return {string}
     */
    public get $applicationName(): string {
        return this.applicationName;
    }

    /**
     * Getter $password
     * @return {string}
     */
    public get $password(): string {
        return this.password;
    }

    /**
     * Getter $port
     * @return {number}
     */
    public get $port(): number {
        return this.port;
    }

    /**
     * Getter $username
     * @return {string}
     */
    public get $username(): string {
        return this.username;
    }

    /**
     * Getter $host
     * @return {string}
     */
    public get $host(): string {
        return this.host;
    }

    /**
     * Getter $warmStandByPort
     * @return {number}
     */
    public get $warmStandByPort(): number {
        return this.warmStandByPort;
    }

    /**
     * Getter $warmStandByTimeout
     * @return {number}
     */
    public get $warmStandByTimeout(): number {
        return this.warmStandByTimeout;
    }

    /**
     * Getter $warmStandByAttempts
     * @return {number}
     */
    public get $warmStandByAttempts(): number {
        return this.warmStandByAttempts;
    }

    /**
     * Getter $disabled
     * @return {boolean}
     */
	public get $disabled(): boolean {
		return this.disabled;
	}


}