import { PLAYER_CLASSES } from '@aberration/game-data';
export class PlayerClass {
  glyph: string;
  name: string;
  cards: string[];
  backgroundColor: string;

  constructor(classInfo: {
    glyphPath: string;
    name: string;
    cards: string[];
    backgroundColor: string;
  }) {
    this.glyph = classInfo.glyphPath;
    this.name = classInfo.name;
    this.cards = classInfo.cards;
    this.backgroundColor = classInfo.backgroundColor || '#ff5000';
  }

  static initClass({
    glyphPath,
    name,
    cards,
    backgroundColor,
  }: {
    glyphPath: string;
    name: string;
    cards: string[];
    backgroundColor: string;
  }) {
    return new PlayerClass({
      glyphPath,
      name,
      cards,
      backgroundColor,
    });
  }

  static initRandomClass(): PlayerClass {
    const classes = PLAYER_CLASSES;
    const classKeys = Object.keys(classes);
    const randomKey = classKeys[
      Math.floor(Math.random() * classKeys.length)
    ] as keyof typeof PLAYER_CLASSES;
    return this.initClass(classes[randomKey]);
  }
}
