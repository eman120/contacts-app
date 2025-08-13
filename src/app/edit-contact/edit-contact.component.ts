import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { addressTypeValues, phoneTypeValues } from 'src/app/contacts/contact.model';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  // firstName = new FormControl();
  // lastName = new FormControl();
  // dateOfBirth = new FormControl();
  // favoritesRanking = new FormControl();

  // contactForm = new FormGroup({
  //   firstName : new FormControl(),
  //   lastName : new FormControl(),
  //   dateOfBirth : new FormControl(),
  //   favoritesRanking : new FormControl(),
  //   phone: new FormGroup({
  //   phoneNumber: new FormControl(''),
  //   phoneType: new FormControl('mobile')
  // }),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //     country: new FormControl('')
  //   })
  // });

  // contactForm = new FormGroup({
  //   id: new FormControl(),
  //   firstName : new FormControl(),
  //   lastName : new FormControl(),
  //   dateOfBirth : new FormControl(),
  //   favoritesRanking : new FormControl(),
  //   phone: new FormGroup({
  //     phoneNumber: new FormControl(),
  //     phoneType: new FormControl()
  //   }),
  //   address: new FormGroup({
  //     streetAddress: new FormControl(),
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     postalCode: new FormControl(),
  //     addressType: new FormControl()
  //   })
  // });

  contactForm = this.formBuilder.nonNullable.group({
    id: '',
    firstName : '',
    lastName : '',
    dateOfBirth : <Date | null> null,
    favoritesRanking : <number | null> null,
    phone: this.formBuilder.nonNullable.group({
      phoneNumber: '',
      phoneType: ''
    }),
    address: this.formBuilder.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: ''
    })
  });

  phoneTypes = phoneTypeValues;
  addressTypes = addressTypeValues;

  constructor(private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactsService.getContact(contactId).subscribe(contact => {
        if(!contact) return;
        // this.firstName.setValue(contact.firstName);
        // this.lastName.setValue(contact.lastName);
        // this.dateOfBirth.setValue(contact.dateOfBirth); 
        // this.favoritesRanking.setValue(contact.favoritesRanking);

        // this.contactForm.controls.id.setValue(contact.id);
        // this.contactForm.controls.firstName.setValue(contact.firstName);
        // this.contactForm.controls.lastName.setValue(contact.lastName);
        // this.contactForm.controls.dateOfBirth.setValue(contact.dateOfBirth); 
        // this.contactForm.controls.favoritesRanking.setValue(contact.favoritesRanking);
        // this.contactForm.controls.phone.controls.phoneNumber.setValue(contact.phone?.phoneNumber);
        // this.contactForm.controls.phone.controls.phoneType.setValue(contact.phone?.phoneType);
        // this.contactForm.controls.address.controls.city.setValue(contact.address?.city);
        // this.contactForm.controls.address.controls.state.setValue(contact.address?.state);
        // this.contactForm.controls.address.controls.postalCode.setValue(contact.address?.postalCode);
        // this.contactForm.controls.address.controls.streetAddress.setValue(contact.address?.streetAddress);
        // this.contactForm.controls.address.controls.addressType.setValue(contact.address?.addressType);

        this.contactForm.setValue(contact);

        // Update only specific fields
        // this.contactForm.patchValue({
        // firstName: 'New',
        // lastName: 'Name'
        // });

    });
  }

  saveContact() {
    // console.log(this.contactForm.controls.firstName.value);
    // console.log(this.contactForm.controls.lastName.value);
    // console.log(this.contactForm.controls.dateOfBirth.value);
    // console.log(this.contactForm.controls.favoritesRanking.value);
    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }
}
