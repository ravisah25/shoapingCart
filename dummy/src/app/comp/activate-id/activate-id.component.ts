import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activate-id',
  templateUrl: './activate-id.component.html',
  styleUrls: ['./activate-id.component.css']
})
export class ActivateIdComponent implements OnInit {

  constructor(private route:ActivatedRoute,  private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.verify(id).then(data =>{
        Swal('Account activated please login');
        this.router.navigate(['/login']);
      })

    });
  }

}
