// src/services/conceptService.ts
import { supabase } from '../config/supabase';
import { LearningConcept, Topic, Subtopic } from '../types';

export const conceptService = {
  // Fetch all topics
  async getTopics(): Promise<Topic[]> {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .order('sequence');
    
    if (error) throw error;
    return data || [];
  },

  // Fetch subtopics for a topic
  async getSubtopics(topicId: string): Promise<Subtopic[]> {
    const { data, error } = await supabase
      .from('subtopics')
      .select('*')
      .eq('topic_id', topicId)
      .order('sequence');
    
    if (error) throw error;
    return data || [];
  },

  // Fetch concepts for a subtopic
  async getConceptsBySubtopic(subtopicId: string): Promise<LearningConcept[]> {
    const { data, error } = await supabase
      .from('learning_concepts')
      .select('*')
      .eq('subtopic_id', subtopicId)
      .order('sequence');
    
    if (error) throw error;
    return data || [];
  },

  // Fetch concepts for a topic (when no subtopics)
  async getConceptsByTopic(topicId: string): Promise<LearningConcept[]> {
    const { data, error } = await supabase
      .from('learning_concepts')
      .select('*')
      .eq('topic_id', topicId)
      .is('subtopic_id', null)
      .order('sequence');
    
    if (error) throw error;
    return data || [];
  },

  // Fetch single concept by ID
  async getConceptById(conceptId: string): Promise<LearningConcept | null> {
    const { data, error } = await supabase
      .from('learning_concepts')
      .select('*')
      .eq('id', conceptId)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Get next concept for user (based on progress)
  async getNextConcept(userId: string): Promise<LearningConcept | null> {
    // Get concepts user hasn't mastered yet
    const { data, error } = await supabase
      .rpc('get_next_concept_for_user', { p_user_id: userId });
    
    if (error) {
      console.error('Error fetching next concept:', error);
      // Fallback: get first concept
      const { data: firstConcept } = await supabase
        .from('learning_concepts')
        .select('*')
        .order('sequence')
        .limit(1)
        .single();
      
      return firstConcept;
    }
    
    return data;
  },
};