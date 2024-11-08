import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-member-opinions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-opinions.component.html',
  styleUrl: './member-opinions.component.scss'
})
export class MemberOpinionsComponent {
  currentIndex: number = 0;
  totalMembers: number = 3;
  intervalId: any;

  testimonials = [
    {
      name: "Ina Penner",
      text: "Manuel zeigte in unserer Zusammenarbeit großes Engagement bei der Umsetzung unserer Webanwendung. Bei der Arbeit war er immer bereit seine Expertise einzubringen, somit unterstützte er das Team mit innovativen Ansätzen und stand Teammitglieder aktiv bei, wenn diese auf Herausforderungen stießen. Seine Fähigkeiten und seine Teamorientierung machte ihn zu einer wertvollen Ergänzung unseres Teams."
    },
    {
      name: "Miriam Fuchs",
      text: "Ich hatte die Gelegenheit, mit Manuel an einem Projekt zusammenzuarbeiten, und dabei konnte er vor allem durch seine Fachkenntnisse und seine Kreativität überzeugen. Besonders schätze ich seine Fähigkeit, Aufgaben effizient umzusetzen und neue Ideen einzubringen. Er geht offen auf Anregungen ein und zeigt dabei eine hohe Flexibilität, was die Zusammenarbeit sehr dynamisch gestaltet hat. Manuel hat sich gut in das Team integriert und mit seiner positiven Einstellung zur guten Arbeitsatmosphäre beigetragen."
    },
    {
      name: "Christopher Hampel",
      text: "Die Zusammenarbeit in unserem Teamprojekt mit Manuel Mannhold hat zu jeder Zeit sehr gut funktioniert. Durch seine fundierten Kenntnisse in der Webentwicklung war er ein maßgeblicher Faktor für den Erfolg unseres Softwareprojekts. Vor allem seine Hilfsbereitschaft bei Fragen und Problemen anderer Teammitglieder möchte ich hervorheben."
    }
  ];

  goToNext(): void {
    // Nächster Testimonial
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToPrevious(): void {
    // Vorheriger Testimonial
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

}
