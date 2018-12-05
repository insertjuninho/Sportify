import { Component } from '@angular/core';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public smartAudio: SmartAudioProvider,
              private fileChooser: FileChooser,
              private fileOpener : FileOpener,
              private filePath   : FilePath) {

  }

  iniciar() {
    this.smartAudio.play('playbtn');
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'application/mp3').then(file => {
          alert("It worked!")
        }).catch(err => {
          alert(JSON.stringify(err));
        });
      }).catch(err => {
        alert(JSON.stringify(err));
      });
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }

}
