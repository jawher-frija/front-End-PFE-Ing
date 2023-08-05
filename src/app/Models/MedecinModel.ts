export class MedecinModel {
    public constructor(
        public username: string,
        public email: string, 
        public password: string,
        
        public adresse: string,
        public telephone: string,
       
        public genre: string,
        public specialite: string,
        public experience: {
            establishment12: string;
            specialty: string;
        }[],
      
      
        public parcours: {
            diploma: string;
            establishment: string;
            field: string;
        }[],
        public image: string,
        public repeatPass: string){}
    }
  
   