import React from "react";

class Speaker2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Keynote Speakers - 17th International Conference on Information Technology and Applications (ICITA)";
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="section_title">
                    <h1>Keynote Speaker</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <img
                        src={require("../assets/img-comm/tony.jpg")}
                        alt=""
                        width="260"
                        height="240"
                      />
                      <h4>Dr.Anthony Brooks</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>Aalborg University, Denmark</i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Dr. Anthony Brooks is Associate Professor and senior
                          researcher at Aalborg University, Denmark. He is
                          referred to as a third culture thinker and a world
                          leading pioneer in applying digital media towards
                          improving the lives of people of determination aimed
                          at offering unlocking of hidden potentials. His
                          research has been referred to as unique in
                          (re)habilitation and has been awarded international
                          and national awards and honours. A focus of his
                          research is Virtual Information Space/Virtual
                          Interactive Space (VIS) around which his over three
                          decades of research have developed the SoundScapes
                          system as a hybrid flexible modular system application
                          that combines arrays of components (interfaces,
                          mapping softwares, multimedia contents as feedback
                          stimuli, and presentation means, to enable a mixing
                          and matching to users individual needs so as to best
                          achieve desired outcomes in different situations. His
                          PhD on this subject was from the University of
                          Sunderland, UK.{" "}
                        </p>
                        <p align="left">
                          He has been steering person, organizing chair and
                          co-chair of numerous international conferences. He is
                          an expert reviewer for numerous international research
                          funding foundations and has been external examiner of
                          numerous PhDs. He has numerous international credits
                          as visiting scholar/invited speaker. He is member of
                          numerous international boards and committees.
                        </p>
                        <p align="left">
                          Brooks’ over three decades body of work titled
                          SoundScapes has been presented globally and he has
                          been responsible for approximately 240 publications
                          including eleven books – specifically a three-volume
                          book series focused on Technologies for Inclusive
                          Well-Being. His other books, articles, papers, and
                          chapters cover topics related to contemporary
                          (re)habilitation including:- design, interactivity,
                          sensor technologies, games, computer-generated
                          environments, learning, creative expression, play,
                          innovation, human-computer-interaction, alternative
                          realities, artificial intelligence, art and technology
                          and more.
                        </p>
                        <p align="left">
                          Under Aalborg University, since 2004, Brooks has been
                          director/founder of the ‘SensoramaLab” Complex
                          (including Virtual Reality, HCI, Interactive Games,
                          and Playful Learning). Since 2003 he has been a
                          founding team-member of the ‘Medialogy education’
                          (Bsc, Msc, PhD) within which he has been section
                          leader, lecturer, coordinator, supervisor, and study
                          board member. Aligned, he has also been lecturer,
                          supervisor, coordinator and study board member for the
                          ‘Art and Technology education’ (BA). His volunteering
                          has involved visiting numerous eastern European
                          countries recruiting international students, leading
                          to the Medialogy education growing to be the largest
                          number of student intake numbers across three
                          campuses.
                        </p>
                        <p align="left">
                          Amongst Brooks’ numerous credits are that he has been
                          a coordination board member of the European Network
                          for Intelligent Information Interfaces (i3net) and
                          since 2004 has been active working for the European
                          Commission and other international funding
                          organizations as evaluator, rapporteur, and expert
                          reviewer. He was also a member of the Global Education
                          Team (GET) presenting around the world.
                        </p>
                        <p align="left">
                          His research within (re)habilitation has been catalyst
                          responsible for numerous externally funded
                          international and national projects as well as an
                          industry start-up company, and a family of patents.{" "}
                        </p>
                        <p align="left">
                          {" "}
                          Originating from Wales, born into a family with
                          disabled members, at an early age he ‘invented’
                          alternative solutions for adaptive accessibility and
                          creative ‘control’ of stimuli. In the 1980s he created
                          bespoke instruments, applications, and volumetric
                          invisible sensing systems for unencumbered
                          gesture-control of digital media to stimulate
                          meaningful causal interactions that could typically be
                          tailored to individuals, their needs, preferences and
                          desires alongside the outcome goals of facilitators,
                          therapists, educators etc.
                        </p>
                        <p align="left">
                          Brooks’ art was first featured at the Institute of
                          Contemporary Arts (ICA) in 1979. More recently, he was
                          first artist in residence at the Centre for Advanced
                          Visualisation and Interactivity (CAVI) at Aarhus
                          University, Denmark at the end of 1990s. Brooks has
                          been featured at major events around the world,
                          including the cultural events at two
                          Olympic/Paralympics (Atlanta 1996; Sydney 2000),
                          numerous European Cultural capital showcases, COEX
                          Seoul, Korea in 2004, and also at underground events
                          such as the Danish NeWave in New York city 1999. His
                          interactive art installations have been exhibited at
                          numerous renown Museums of Modern Art (MoMAs).
                        </p>
                        <p align="left">
                          Brooks has been plenary keynote speaker at over twenty
                          international events and he is Danish representative
                          for UNESCO’s International Federation for Information
                          Processing (IFIP) Technical committee (WG14) on
                          “Entertainment Computing” – specifically under work
                          groups WG14.7 “Art and Entertainment”; WG14.8 “Serious
                          Games”, and WG 14.9 “Game Accessibility”. He has been
                          active internationally as a PhD viva examiner over
                          many years. Under the European Alliance for Innovation
                          (EAI) he has steered the International Conference
                          ArtsIT [Arts & Technology, Interactivity and Game
                          Creation] since 2009 (see http://artsit.org ). Brooks’
                          university profile is at –
                          https://vbn.aau.dk/da/persons/103302 Brooks now has a
                          vision of what he refers to as “Probably the best
                          (re)habilitation complex in the world” posited being
                          located at networked future smart cities where secured
                          learning and sharing of experiences can emerge across
                          cultures and languges and where advanced technologies
                          are implemented toward improving wellbeing and
                          quality-of-life potentials for people of determination
                          and others. This vision will be presented to close
                          Brooks’ talk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speaker2;
