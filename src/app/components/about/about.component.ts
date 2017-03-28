import { Component } from '@angular/core';
import { UnityService } from '../../services/unity.service';


@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
    public resultMessage: string;
    constructor(private unityService: UnityService) {
       this.unityService.getUnityResult().subscribe((resultObj: any)=>{
           this.resultMessage = resultObj.result;
       });
    }
}