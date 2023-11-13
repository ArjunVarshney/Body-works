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

export interface RoutineCategoryType {
   imageUrl: string;
   title: string;
   routineCount: number;
}

export interface RoutineType {
   category: string[];
   id: number;
   routine: {
      routine_title: string;
      routine_description: string;
      routine_imageUrl: string;
      workout_summary: {
         [key: string]: string;
      };
      workout_plan: {
         heading: string | null;
         day_plan: string;
      }[];
   };
}

export interface PosterType {
   title: string;
   type: string;
   focus: string;
   infoText: string;
   difficulty: string;
   id: string;
   images: {
      poster_imageUrl: string;
      muscles_worked_imageUrl: string;
      focus_imageUrl: string;
      type_imageUrl: string;
      difficulty_imageUrl: string;
   };
}
