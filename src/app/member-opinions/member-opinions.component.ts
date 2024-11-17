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

  /**
 * Advances to the next item in the testimonials array.
 * 
 * The function updates the `currentIndex` property to point to the next item in the `testimonials` array. 
 * It ensures the index wraps around to the start when it reaches the end of the array by using the modulo operator.
 * 
 * @remarks
 * This method assumes that the `testimonials` array is not empty. If the array is empty, 
 * the behavior may need additional handling to avoid potential issues.
 */

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  /**
 * Moves to the previous item in the testimonials array.
 * 
 * The function updates the `currentIndex` property to point to the previous item in the `testimonials` array. 
 * It ensures the index wraps around to the last item when it reaches the start of the array by using the modulo operator.
 * 
 * @remarks
 * This method assumes that the `testimonials` array is not empty. If the array is empty, 
 * additional handling may be required to prevent unintended behavior.
 */

  goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

}
