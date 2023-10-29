export interface ExType {
   name: string;
   title: string;
   target: string;
   "muscles worked": string;
   bodyPart: string;
   equipment: string;
   id: string;
   blog: string;
   images: string[];
   gifUrl: string;
   videos: string[];
   keywords: string[];
}

export interface MuscleType {
   imageUrl: string;
   targetMuscle: string;
   exerciseCount: number;
}

export interface BodyPartType {
   imageUrl: string;
   bodyPart: string;
   exerciseCount: number;
}
export interface EquipmentType {
   imageUrl: string;
   equipment: string;
   exerciseCount: number;
}
