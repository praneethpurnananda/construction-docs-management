import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

export interface dataElements{
  nameOfDocument:string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  displayedColumns: string[] = [ 'nameOfDocument','uploadFile','uploadStatus'];
  datasource :dataElements[] = [];
  errorMessage: boolean = false;
  municipalityDocuments = [
    { nameOfDocument:'Dcouments'},
    { nameOfDocument:'Linked Documents'},
    { nameOfDocument:'EC'},
    { nameOfDocument:'Tax Receipt'},
    { nameOfDocument:'Aadhaar'},
    { nameOfDocument:'Old Approval'},
    { nameOfDocument:'LCC'},
    { nameOfDocument:'Market Value'},
    { nameOfDocument:'Soil Test'},
    { nameOfDocument:'All Risk Policy'},
    { nameOfDocument:'Structural Stability Certificate/Structural Designs'},
    { nameOfDocument:'Mortgage'},
    { nameOfDocument:'BuilderLicence,Photos,pan Card,ITR for 3 years'}
  ];

  layoutDocuments=[
    { nameOfDocument:'Documents'},
    { nameOfDocument:'Linked Documents'},
    { nameOfDocument:"LCC"},
    { nameOfDocument:"Adangal"},
    { nameOfDocument:"1B"},
    { nameOfDocument:"Surveyor sketch-(FMB)"},
    { nameOfDocument:"Combined Sketch"},
    { nameOfDocument:"Blue Prints"},
    { nameOfDocument:"Ec"}
  ]

  presentations=[
    { nameOfDocument:"Structural Designs"},
    { nameOfDocument:"Elevations"},
    { nameOfDocument:"Working Drawing"},
    { nameOfDocument:"Other Drawings"}
  ]

  estimationsValuetions=[
    { nameOfDocument:"Documents"},
    { nameOfDocument:"Building Drawing"}
  ]

  createProjectForm: FormGroup;
  municipalitySubmissionForm: FormGroup;
  file!: File;
  seletedProject:any=[
    { displayName:'Municipality Submission', value:'municipalitySubmission' },
    { displayName:'Layout Submission', value:'layoutSubmission' },
    { displayName:'Presentations', value:'presentations' },
    { displayName:'Estimations & Valuetions', value:'estimations&Valuetions'}
  ];
  seletedMunicipalityType:any=[
    { displayMunicipality:'IRB', value:'irb'},
    { displayMunicipality:'Apartment', value:'apartment'},
    { displayMunicipality:'Commertial', value:'commertial'}
  ]

  constructor(private fb:FormBuilder) {
    this.createProjectForm=this.fb.group({
      typeOfProject: ['',Validators.required],
    });

    //municipality Submission Form
    this.municipalitySubmissionForm=this.fb.group({
      typeOfMunicipality:['',Validators.required]
    })
  }

  upload(file:File[]){
    this.file=file[0];
  }
  
  submitFile(){
    const a = new FormData();
    a.append('file',this.file);
    console.log(a);
  }

  ngOnInit(): void {
  }

  selectedProjects(){
    this.errorMessage = false;
    if(this.createProjectForm.value.typeOfProject === 'municipalitySubmission'){
      this.datasource = this.municipalityDocuments;
    }
    else if(this.createProjectForm.value.typeOfProject === 'layoutSubmission'){
      this.datasource = this.layoutDocuments;
    }
    else if(this.createProjectForm.value.typeOfProject === 'presentations'){
      this.datasource = this.presentations;
    }
    else if(this.createProjectForm.value.typeOfProject === 'estimations&Valuetions'){
      this.datasource = this.estimationsValuetions;
    }
    else{
      this.errorMessage = true;
      console.error("invalid type of project selected");
    }
  }

}


