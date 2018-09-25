import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MsgService {
    constructor(public toastr: ToastrService) {

    }

    showMsg(msg) {
        this.toastr.show(msg);
    }
    showInfo(msg) {
        this.toastr.info(msg);
    }
    showSuccess(msg) {
        this.toastr.success(msg);
    }
    showError(msg) {
        // TODO complete error handling for FE
        this.toastr.error(msg);
    }
    showWarning(msg) {
        this.toastr.warning(msg);
    }
}