import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService, NetService } from 'core';

@Component({
    template: `
    <div class="container text-center" *ngIf="loading && !errorMsg">
      Authenticating your access, Please wait .....<br/>
      </div>
      <lib-loading *ngIf="loading"></lib-loading>
      <lib-alert *ngIf="_auth.errorMsg" [alertType]="'danger'" [alertContent]="_auth.errorMsg" (alertClose)="this._auth.clearMsg()"></lib-alert>
      
        <p *ngIf="_auth.errorMsg" class="animated fadeIn text-center">
            <button class="btn btn-primary my-2" (click)="_auth.doLoginLink()"  ><i class="fa fa-fw fa-sign-in"></i> Login</button> &nbsp;
            <button class="btn btn-secondary my-2" (click)="_auth.doRegisterLink()"><i class="fa fa-fw fa-user-plus"></i> Register</button>
        </p>
    `
})


export class AWSInboundLoginComponent implements OnInit {
    loading:boolean = true;
    code: string;
    constructor(
      private _route: ActivatedRoute,
      public _auth: AuthService,
      private _router: Router,
      private _netservice: NetService
    ) {}
  	ngOnInit() {
        this.code = this._route.snapshot.queryParamMap.get("code")
        this.login();
    }

    result: any;
    login(){
        this._auth.login(this.code);
        this.loading = false;
    }
}

/*
{
    "id_token": "eyJraWQiOiJxeFwvQ3FZZlBEcUY3WUxvRDNNQk1udmdYTlNJSjN4S29zMmZ1c0pqS0VlQT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiTGo3RVdZSGxMQVR0WkRoeVBxeFk5ZyIsInN1YiI6IjZjZjMyY2UxLTNmZTgtNDZiMi04MjNmLTgyNjMxM2I1MjlhOSIsImF1ZCI6IjdibGNlZnVhM2xybnRzZzk0aHFuaDR0MTFyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY1MzU0Nzk3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV96bWlucllrUnkiLCJuYW1lIjoiR2FuZXNoIiwiY29nbml0bzp1c2VybmFtZSI6IjZjZjMyY2UxLTNmZTgtNDZiMi04MjNmLTgyNjMxM2I1MjlhOSIsImV4cCI6MTU2NTM1ODM5NywiaWF0IjoxNTY1MzU0Nzk3LCJlbWFpbCI6ImdhbmVzaDM1QGdtYWlsLmNvbSJ9.cqNNlzF8kdU_5PAoBFOv54zY7ZfR9mFiCr0FKxUkQ-igUCK3GKlSfiGwMxSkhOqqfj8DLA0V0VF5l_SQ2psXpV1PlUC1mEbnHuS6NTRQKca7jmwXzTUqy7LTvLZWR2eAbY9eykBPcM_kLZEsSyLBpxg2D_OBYvUtQKzrk_Wr9msQU4ladTcs-kLVtXHhjwpflXmSjslJBJkhTdOP392kQE75yXsFFFZGd0mDadAb0Q-gnVnh9BF21mWEJv1Pw48X_ZOyfOXHwosbo4HLf_mqUAvnc3OjVVghc1V5mGskT2hiFbxMEgcNVJGRoZJCIw4bYD_vXAo4-TYu1bGFZ9lhDQ",
    "access_token": "eyJraWQiOiJJSU5UMjJtRm5pVm5Idkk5emZYMzQxcWJ4NXIxMTk2dnB5WXErXC82d2d3QT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2Y2YzMmNlMS0zZmU4LTQ2YjItODIzZi04MjYzMTNiNTI5YTkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTY1MzU0Nzk3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV96bWlucllrUnkiLCJleHAiOjE1NjUzNTgzOTcsImlhdCI6MTU2NTM1NDc5NywidmVyc2lvbiI6MiwianRpIjoiODZiYzUyN2UtY2U5NS00MjljLTk5ZTQtNDRiY2U2NTY1ZjEwIiwiY2xpZW50X2lkIjoiN2JsY2VmdWEzbHJudHNnOTRocW5oNHQxMXIiLCJ1c2VybmFtZSI6IjZjZjMyY2UxLTNmZTgtNDZiMi04MjNmLTgyNjMxM2I1MjlhOSJ9.azdpZFBdtyzAB2BC2jOsc0niKdX4bNfpKwmZLtjhTf4L1Hmz-_FTPPZiTcGByPTON14DC7ch4NpvM7XGWTGPGoqqjCgYf4rIgwyVBIyjVW_jQzeMNVC4Pf6qOtmfV34YNq75dn9mCrpF8UvSW-oBzAErVjNq1gBjSA1NHAVzH_9QQKQFJ7pn4ct4-nUIECY6Lmv1VhqdEH5gW21a-Y3aElhR0J4NzAUI68hhNl0JdQcWSHDSjHTv2bpyBuF7qg5DZ9DnlowA5rNhrFfl-zu-e6BVde2yKLkjPlCzHQEPQyRiYZOnWLVA5GoCnNK9AnmuPI0N0fSNndfGKkAZvPq5XQ",
    "refresh_token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.d1OWSxjFvRjqv1iCwreaVpVlrblTaikcOC_Qwqhq7Z5Oovm1b4OU0dEo12ZvfaoWCE0Rcit-w-eOyPzIUkoUlp2FVMirDUI-Oh5dCO72BgKJcmBInldVqQhYbqU8FbrrlA78cHBop71aEOrB9firEpkTlWfP7xyp9lOi5bNY3KY5sGZGhJfuDhZJhX0dvu4EZYBe_ZbwssxqwL2qtTtRgVuF-h8fjiqYGQuK5DBgVINQw5N4k62O-vJB_b_sBDggGusNateEDy4VfLoHHCnrF49j1cQw1BvXR2x166GEKynvhzQFIaliS4x70lV-C_oVahBiQqMM7kIRqQHmVoRwYg.Yu-2tqAMABHgXnOm.tnucjrojWjJjGab9UDhwjp8SvYZkbB2Ia7O5VOn3-yy0s-W1uy1OIXu7Ql6wrnr5Meck6XTFMmTkgKRHg_LVZVmplPwrHM8wTY7Mf8qWljA1R3zfrob2Q--RKA1BIhx_RRxGcIB1roqJY9PeTA73pSstoatxwr-3dPLAhAIbUKl4NYHIformyOgAoSKRnnM2Wi6ejDq1IbzqNwfMBW8j4UmZdOwKS1bCArdRLD27tqRqwQdSB44ojLh_yMB7biVUz-X62RoIVNTMmjP2mzNBf0UjJCI_OEmFQ_-TLsd7Cn0i4RSz6BYxQ8zyI_iE2nVY-34E5mePENtrRxxUVGACuXSK4zK5Xda9y2prKDAXyI85_wDDWqBRjc49E9Ql2xYniUANYP5z5twunh3MfJgWhRNRb0KTkGWHnmYUQK4DURm9lRL-4HUaOrawN8Q878eyJpkORgt6z4xo38lKmxucIUG7dBWyq9NSsb_FiIdx1k97HtJPkH9u1Umshza7yaiHxcV598RbdqSjRFeZAGEJUaBjMe5eI-0WVz25AmC_CvTuCkboDI7tsiO7DcwIEhepgbjyCOGgCPwDKF5SAa8I1sejbE0xUFBwKdHn0DCu9KhBFi7GkzXAQ-vJrrGI4uv7-GgAA6paZx1D7V81h12t6XsKE-jk9r4LglZqYfEBB_jVIggrwhdxhfQW6PpuE_2s8M16lxyZyM6WyVd-lnvxWitl2Swz5SWFD1YfMabalw9IoCiVTrownuu_cd2sivmeATMW6kgXSnyTM59RSp2yp_c4xSu60XGUu_MmgpJ0ACPUYZSbz6KTy0_jw2Kti7jKimBRM7zXshRR6RiJrM3zqn-vWAHobWnJX80GcmW7tVRjVqCSbhYKom_VWHWmaF7QWdPMx5PEIhc3ADEA-rlnOxtf3p6Ko6EWyTW6t7ZLIkTR0JR-pVvM7qNEfDrVu5Zik2ba6-_wMKtYAPR1RI8mXtXeabTqcs88Z3lIqYV_H6Iyux-DISQNtTZZJ2Afspg3YByCKZvwEm0I9w0XqJSoqvyCYpFUXdE0B0AbAeO1wNTmzTIrWUkTKpcABkKS9kXLcmr3ccWl7WYSj7_mssonyK9Qk6_KMyYX2Z6v4IxD3umXc7Ea7eoTK108K821cHXNePcyAxuC0XDrwazFTet2KItNLJYVqQpSFDNRUryCbEWFCxCeIEHJwjJ7ghqYyWSBlssRuWLDnSqip8d2qoF066RADhv_-tjRD1r69uwTvLpWEec_mGK17m06ZSgy_H_TRP6aBGu5yeInpsk-bkRmS6TUzI7028MgVZWoakCLOmEqyIJgGw.iFw7djWyw0Tvcr_gE1draw",
    "expires_in": 3600,
    "token_type": "Bearer"
}
*/