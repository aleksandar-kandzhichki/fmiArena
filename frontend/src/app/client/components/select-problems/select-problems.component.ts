import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sciences, ScienceNames } from '../../../../../../data/science';
import { AllTopics, MathTopics, AlogrihmTopics, InformaticTopics } from '../../../../../../data/topics';

@Component({
  selector: 'app-select-problems',
  templateUrl: './select-problems.component.html',
  styleUrls: ['./select-problems.component.scss']
})
export class SelectProblemsComponent implements OnInit {

  Sciences = Sciences;
  ScienceNames = ScienceNames;
  scienceSelected: number;

  Topics = AllTopics;
  MathTopicNames: string[] = [];
  InformaticTopicNames: string[] = [];
  AlgorithmTopicNames: string[] = [];

  selectedTopic: number;
  selectedTopicName: string;
  selectedTopics: number[] = [];
  selectedTopicsNames: string[] = [];

  @Input() many = false;

  @Output() onSelected = new EventEmitter<number>();
  @Output() onManySelect = new EventEmitter<number[]>();

  constructor() {
    for (var key in MathTopics) {
      if (typeof MathTopics[key] != "number") this.MathTopicNames.push(MathTopics[key]);
    }
    for (var key in AlogrihmTopics) {
      if (typeof AlogrihmTopics[key] != "number") this.AlgorithmTopicNames.push(AlogrihmTopics[key]);
    }
    for (var key in InformaticTopics) {
      if (typeof InformaticTopics[key] != "number") this.InformaticTopicNames.push(InformaticTopics[key]);
    }
  }

  ngOnInit() {
  }

  find(names: Object, name: string): number {
    for (var key in names) {
      if (names[key] == name) return Number(key);
    }
    return -1;
  }

  selectOne(topic: string) {

    this.selectedTopicName = topic;
    let foundTopic = -1;
    if ((foundTopic = this.find(MathTopics, topic)) != -1) {
      this.selectedTopic = foundTopic;
    }
    else if ((foundTopic = this.find(AlogrihmTopics, topic)) != -1) {
      this.selectedTopic = foundTopic;
    }
    else if ((foundTopic = this.find(InformaticTopics, topic)) != -1) {
      this.selectedTopic = foundTopic;
    }

    this.onSelected.emit(this.selectedTopic);
  }

  selectMany(topic: string) {

    let index = this.selectedTopicsNames.indexOf(topic);
    if (index > -1) {
      this.selectedTopicsNames.splice(index, 1);
      this.selectedTopics.splice(index, 1);

      this.onManySelect.emit(this.selectedTopics);
      return;
    }

    this.selectedTopicsNames.push(topic);
    let foundTopic = -1;
    if ((foundTopic = this.find(MathTopics, topic)) != -1) {
      this.selectedTopics.push(foundTopic);
    }
    else if ((foundTopic = this.find(AlogrihmTopics, topic)) != -1) {
      this.selectedTopics.push(foundTopic);
    }
    else if ((foundTopic = this.find(InformaticTopics, topic)) != -1) {
      this.selectedTopics.push(foundTopic);
    }

    this.onManySelect.emit(this.selectedTopics);
  }

  selectTopic(topic: string) {
    if (!this.many) this.selectOne(topic);
    this.selectMany(topic);
  }

  isTopicActive(topic: string) {
    return this.selectedTopicName == topic || this.selectedTopicsNames.indexOf(topic) != -1;
  }
}
