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
    showError(error: any) {
        // debugger;
        // TODO complete error handling for FE
        if (error.error) {
            if (error.error.message._message) {
                this.toastr.error(error.error.message._message)
            } else {
                this.toastr.error(error.error.message);
            }
        }
    }
    showWarning(msg) {
        this.toastr.warning(msg);
    }
}