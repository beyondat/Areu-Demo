import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PlaceRank, PlaceRankService} from '../../service/place-rank.service';
@Component({
  selector: 'app-place-rank',
  templateUrl: './place-rank.component.html',
  styleUrls: ['./place-rank.component.css']
})
export class PlaceRankComponent implements OnInit {
  @Input() placeRank: PlaceRank;
  constructor(
    private placeRankService: PlaceRankService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      let id: number = parseInt(route.snapshot.params['categoryId']);
      this.placeRank = this.placeRankService.getRankItem(id);
   }

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //   let id: number = params['id'];
    //   this.placeRank = this.placeRankService.getRankItem(id);
    //   });
  }

}
