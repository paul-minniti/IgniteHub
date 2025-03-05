export interface Orginization {
	id: string;
	name: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
	websites?: Website[];
}

export interface Website {
	id: string;
	name: string;
	domain?: string;
	structureId?: string;
	organizationId: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
